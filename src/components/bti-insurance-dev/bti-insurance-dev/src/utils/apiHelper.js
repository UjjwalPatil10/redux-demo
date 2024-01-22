/* eslint-disable import/no-extraneous-dependencies */
// import Router from "next/router";
import { isObject, isEmpty, isArray, isString } from "lodash";
import siteConfig from "../config/siteConfig";
import AuthAction from "../redux/reducers/auth/reducer";
import { store } from "../redux/store/configureStore";

const defaultHeader = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export default function fetchHelper(
  url,
  data = {},
  method = "GET",
  headers = defaultHeader,
  formData = false
) {
  const head = { ...headers };

  let options = {
    method,
    headers: head,
  };
  if (method === "POST" || method === "PUT") {
    options = { ...options, body: formData ? data : JSON.stringify(data) };
  }
  console.log("apiUrl===>>>", siteConfig.apiUrl + url, options);
  return fetch(`${siteConfig.apiUrl}${url}`, options)
    .then((res) => {
      const newData = res.json().then((detail) => {
        if (detail && detail.message === "Unauthorised") {
          setTimeout(() => {
            // Router.push("/");
          }, 1000);
          return Promise.resolve(detail);
        }

        let nData = detail;
        console.log("detail123456detail======>>>", detail);
        if (isObject(detail) && !isEmpty(detail) && detail.code) {
          const obj = {};
          if (detail.code == 401) {
            console.log("detail code======>>>", detail.code);
            store.dispatch(AuthAction.setAccessToken(""));
            store.dispatch(AuthAction.setUserData({}));
            localStorage.clear();
            window.location.reload();
            return Promise.resolve(nData);
          } else if (isArray(detail.problems) && detail.problems.length > 0) {
            // eslint-disable-next-line prefer-destructuring
            obj.message = detail.problems[0];
            obj.code = detail.code;
            nData = obj;
          }
        }

        return Promise.resolve(nData);
      });
      return Promise.resolve(newData);
    })
    .catch((error) => Promise.reject(error));
}

export function getAPIProgressData(
  endpoint,
  method,
  data,
  headers = false,
  onProgress = null
) {
  const isOnline = window.navigator.onLine;
  if (isOnline) {
    return new Promise(async (resolve, reject) => {
      const url = siteConfig.apiUrl + endpoint;
      const oReq = new XMLHttpRequest();
      oReq.upload.addEventListener("progress", (event) => {
        if (event.lengthComputable) {
          const progress = (event.loaded * 100) / event.total;
          if (onProgress) {
            onProgress(progress);
          }
        }
      });

      var FormData = require("form-data");
      var form = new FormData();
      if (data && Object.keys(data).length > 0) {
        console.log("hello ====>>>", data);
        Object.keys(data).map((k) => form.append(k, data[k]));
      }
      console.log("data===>>>", data, form);
      const hData = {
        "Content-Type": "multipart/form-data",
      };

      // if (headers) {
      //   hData.Authorization = headers;
      // }

      let options = {
        method: method,
        headers: headers ? headers : hData,
        body: form,
      };

      delete options.headers["Content-Type"];

      console.log("options ========================>", options);
      console.log(url);
      console.log(options);

      fetch(url, options)
        .then(function (res) {
          const result = res.json();
          // console.log('res=====>>', );
          resolve(result);
        })
        .then(function (result) {
          console.log("result 12345====>>>>>>>>", result);
          if (result.code == 401) {
            console.log("result.code======>>>", result.code);
            store.dispatch(AuthAction.setAccessToken(""));
            store.dispatch(AuthAction.setUserData({}));
            localStorage.clear();
            window.location.reload();
            resolve(result);
          }
        })
        .catch((err) => {
          console.log("Catch Part", err);
          reject(err);
        });
    });
  }
}

export function getApiData(endpoint, method, data, headers) {
  console.log("headers==>>>", headers);

  const authState = {} || {};
  const { token } = "" || "";
  const { uuid } = "" || "";
  const authHeaders = {
    "Content-Type": "application/json",
    authorization: token ? `Bearer ${token}` : "",
  };

  return new Promise((resolve, reject) => {
    let query = "";
    let qs = "";
    for (const key in data) {
      query += `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}&`;
    }
    const params = {};
    params.method = method.toLowerCase() === "get" ? "get" : "post";
    if (headers) {
      params.headers = headers;
    } else {
      params.headers = authHeaders;
    }
    console.log(params.headers);
    if (params.method === "post") {
      if (
        params.headers &&
        params.headers["Content-Type"] &&
        params.headers["Content-Type"] === "application/json"
      ) {
        params.body = JSON.stringify(data);
      } else {
        params.body = query;
      }
    } else {
      qs = `?${query}`;
    }

    console.log("params=--", params, endpoint);

    if (
      params.method === "post" &&
      params.headers &&
      params.headers["Content-Type"] &&
      params.headers["Content-Type"] === "application/json"
    ) {
      console.log(JSON.stringify(data));
    } else {
      let str = "";
      if (data && Object.keys(data).length > 0) {
        Object.keys(data).map((dk) => {
          str += `${dk}:${data[dk]}\n`;
        });
      }
      console.log(str);
    }
    console.log(
      "BaseSetting.api + endpoint + qs====>>>>",
      siteConfig.apiUrl + endpoint + qs
    );
    fetch(siteConfig.apiUrl + endpoint + qs, params)
      .then((response) => response.json())
      .then((resposeJson) => {
        console.log("responseee api==>>>", resposeJson);
        if (resposeJson.code == 401) {
          console.log("resposeJson.code======>>>", resposeJson.code);
          store.dispatch(AuthAction.setAccessToken(""));
          store.dispatch(AuthAction.setUserData({}));
          localStorage.clear();
          window.location.reload();
          resolve(resposeJson);
        } else if (
          isObject(resposeJson) &&
          isString(resposeJson.message) &&
          resposeJson.message === "Unauthorized" &&
          endpoint !== "delete-token"
        ) {
          console.log("Unauthorized===>>>");
          // store.dispatch(AuthAction.setAccessToken(''));
          // store.dispatch(AuthAction.setUserData({}));
          // navigation.navigate('RedirectLS');
          resolve(resposeJson);
        } else {
          resolve(resposeJson);
        }
      })
      .catch((err) => {
        console.log("error_apihelper", err);
        reject(err);
      });
  });
}
