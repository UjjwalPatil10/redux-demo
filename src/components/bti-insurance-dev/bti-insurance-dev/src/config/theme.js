import { createTheme, makeStyles } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});

export const BaseColor = {
  white: "#FFFFFF",
  white90: "#FFFFFF90",
  white80: "#FFFFFF80",
  white70: "#FFFFFF70",
  white60: "#FFFFFF60",
  white50: "#FFFFFF50",
  white40: "#FFFFFF40",
  white30: "#FFFFFF30",
  white20: "#FFFFFF20",
  white10: "#FFFFFF10",
  black: "#000000",
  black90: "#00000090",
  black80: "#00000080",
  black70: "#00000070",
  black60: "#00000060",
  black50: "#00000050",
  black40: "#00000040",
  black30: "#00000030",
  black20: "#00000020",
  black10: "#00000010",

  primary: "#0B409B",
  secondary: "#",
  red: "#E60019",
  labelTextColor: "#22262A",
  textGrey: "#707070",
  lightGrey: "#A0A0A0",
  backGround: "#F5F6F8",
  labelColor: "#1F363B",
  grey: "#A8A8A8",
};

export const fonts = {
  default: "Rubik",
  medium: "Rubik-Medium",
  bold: "Rubik-bold",
  semibold: "Rubik-SemiBold",
  extraBold: "Rubik-ExtraBold",
  light: "Rubik-Light",
};

// Create a theme instance.
const theme = createTheme({
  // overrides: {
  //   MuiAccordionSummary: {
  //     root: {
  //       // height: '25px',
  //       border: 'none',
  //       minHeight: '25px',
  //     },
  //     content: {
  //       margin: '0px 0px',
  //       minHeight: '25px',
  //     },
  //     expanded: {
  //       // height: '25px',
  //       minHeight: '25px',
  //     },
  //   },
  //   MuiButtonBase: {
  //     root: {
  //       // height: '25px',
  //       border: 'none',
  //       minHeight: '25px',
  //     },
  //     content: {
  //       margin: '0px 0px',
  //       minHeight: '25px',
  //     },
  //     expanded: {
  //       minHeight: '25px',
  //       // height: '25px',
  //     },
  //   },

  MuiCssBaseline: {
    "@global": {
      "@font-face": [],
    },
  },
  // },
  // palette: {
  //   primary: {
  //     main: `${BaseColor.primary}`,
  //   },
  //   secondary: {
  //     main: `${BaseColor.secondary}`,
  //   },
  //   error: {
  //     main: red.A400,
  //   },
  //   background: {
  //     default: "#FFFFFF",
  //   },
  // },
  // typography: {
  //   fontFamily: fonts.mont,
  //   letterSpacing: 14,
  // },
  // overrides: {
  //   MuiGrid: {
  //     container: {
  //       maxWidth: 1200,
  //       margin: "0px auto",
  //     },
  //   },
  //   MuiAvatar: {
  //     img: {
  //       objectFit: "contain",
  //     },
  //   },
  //   MuiListItemIcon: {
  //     root: {
  //       minWidth: "40px",
  //     },
  //   },
  //   MuiTimelineItem: {
  //     missingOppositeContent: {
  //       flex: "none !important",
  //       "&:before": {
  //         flex: "none !important",
  //         content: "none",
  //       },
  //     },
  //   },
  //   MuiButton: {
  //     // startIcon: {
  //     //   marginRight: 0,
  //     // },
  //     /* Styles applied to the startIcon element if supplied. */
  //     startIcon: {
  //       marginRight: 0,
  //       "& > svg": {
  //         marginRight: 5,
  //       },
  //     },
  //     /* Styles applied to the endIcon element if supplied. */
  //     endIcon: {
  //       display: "inherit",
  //       marginRight: -4,
  //       marginLeft: 8,
  //       "&$iconSizeSmall": {
  //         marginRight: -2,
  //       },
  //     },
  //     containedPrimary: {
  //       boxShadow: "none",
  //       border: "1px solid",
  //       borderColor: `${BaseColor.primary}`,
  //       color: `${BaseColor.white}`,
  //       fontFamily: fonts.mont,
  //       "&:hover": {
  //         backgroundColor: "#FFF !important",
  //         boxShadow: "none",
  //         color: `${BaseColor.primary}`,
  //         borderColor: `${BaseColor.primary}`,
  //         border: "1px solid",
  //       },
  //     },
  //     containedSecondary: {
  //       boxShadow: "none",
  //       border: "1px solid",
  //       borderColor: `${BaseColor.secondary}`,
  //       color: `${BaseColor.white}`,
  //       fontFamily: fonts.mont,
  //       "&:hover": {
  //         backgroundColor: "#FFF !important",
  //         boxShadow: "none",
  //         color: `${BaseColor.secondary}`,
  //         borderColor: `${BaseColor.secondary} `,
  //         border: "1px solid",
  //       },
  //     },
  //     outlinedPrimary: {
  //       boxShadow: "none",
  //       color: `${BaseColor.primary}`,
  //       fontFamily: fonts.mont,
  //       border: "1px solid",
  //       borderColor: `${BaseColor.primary}`,
  //       backgroundColor: `${BaseColor.white} !important`,
  //       "&:hover": {
  //         boxShadow: "none",
  //         backgroundColor: `${BaseColor.primary} !important`,
  //         color: `${BaseColor.white}`,
  //         borderColor: `${BaseColor.primary}`,
  //         border: "1px solid",
  //       },
  //     },
  //     outlinedSecondary: {
  //       boxShadow: "none",
  //       color: `${BaseColor.secondary}`,
  //       fontFamily: fonts.mont,
  //       border: "1px solid",
  //       borderColor: `${BaseColor.secondary}`,
  //       backgroundColor: `${BaseColor.white} !important`,
  //       "&:hover": {
  //         boxShadow: "none",
  //         backgroundColor: `${BaseColor.secondary} !important`,
  //         color: `${BaseColor.white}`,
  //         borderColor: `${BaseColor.secondary}`,
  //         border: "1px solid",
  //       },
  //     },
  //     textPrimary: {
  //       boxShadow: "none",
  //       color: "#373F45",
  //       "&:hover": {
  //         boxShadow: "none",
  //         backgroundColor: "transparent",
  //         color: `${BaseColor.primary} !important`,
  //       },
  //     },
  //   },
  //   MuiTouchRipple: {
  //     rippleVisible: {
  //       animation: "none",
  //       opacity: "0%",
  //     },
  //   },
  //   MuiTypography: {
  //     root: {
  //       wordBreak: "break-word",
  //     },
  //     h1: {
  //       color: BaseColor.darkGreen,
  //       fontFamily: fonts.bold,
  //       fontWeight: "normal",
  //       fontSize: "45px",
  //       [breakpoints.down("xs")]: {
  //         fontSize: "35px",
  //         textAlign: "center",
  //       },
  //     },
  //     h2: {
  //       color: "#264653",
  //       fontFamily: fonts.bold,
  //       fontSize: "34px",
  //       lineHeight: "1.2em",
  //       letterSpacing: "1px",
  //       fontWeight: "normal",
  //       "@media (max-width:768px)": {
  //         fontSize: "26px",
  //         lineHeight: "1.2em",
  //       },
  //       "@media (max-width: 425px)": {
  //         fontSize: "20px",
  //         textAlign: "center",
  //         lineHeight: "1.4em",
  //       },
  //     },
  //     h3: {
  //       color: "#264653",
  //       fontFamily: fonts.semiBold,
  //       fontSize: "26px",
  //       lineHeight: "1.2em",
  //       "@media (max-width:768px)": {
  //         fontSize: "22px",
  //         lineHeight: "1.2em",
  //       },
  //       "@media (max-width: 425px)": {
  //         fontSize: "18px",
  //         // textAlign: 'left',
  //         lineHeight: "1.4em",
  //       },
  //     },
  //     h4: {
  //       color: "#264653",
  //       fontFamily: fonts.semiBold,
  //       fontSize: "22px",
  //       "@media (max-width: 425px)": {
  //         fontSize: "20px",
  //       },
  //     },
  //     h5: {
  //       fontWeight: "700",
  //     },
  //     h6: {
  //       fontSize: "1.5rem",
  //       fontWeight: "700",
  //     },
  //     subtitle1: {
  //       color: "#264653",
  //       margin: "1rem 0.2rem",
  //       fontFamily: fonts.mont,
  //       fontStyle: "normal",
  //       fontSize: "1.2rem", // 16 pt
  //       lineHeight: "1.2em",
  //       "@media (max-width: 425px)": {
  //         fontSize: "1rem",
  //       },
  //     },
  //     subtitle2: {
  //       color: "#373F45",
  //       margin: "1rem 0.2rem",
  //       fontFamily: fonts.mont,
  //       fontStyle: "normal",
  //       fontSize: "1.2rem", // 16 pt#373F45
  //       lineHeight: "1.5em",
  //       "@media (max-width: 425px)": {
  //         fontSize: "1rem",
  //       },
  //     },
  //     body1: {
  //       color: BaseColor.black,
  //       "@media (max-width: 425px)": {
  //         fontSize: "0.9rem",
  //       },
  //     },
  //     body2: {
  //       color: BaseColor.black,
  //       "@media (max-width: 425px)": {
  //         fontSize: "0.8rem",
  //       },
  //     },
  //   },
  //   MuiDivider: {
  //     root: {
  //       marginBottom: "2rem",
  //       [breakpoints.down("sm")]: {
  //         marginBottom: "1rem",
  //       },
  //     },
  //   },
  //   MuiExpansionPanel: {
  //     root: {
  //       boxShadow: "none",
  //       "&:before": {
  //         content: "unset",
  //       },
  //     },
  //   },

  //   MuiStepConnector: {
  //     lineHorizontal: {
  //       borderTopWidth: "2.3px !important",
  //     },
  //   },
  //   MuiStepLabel: {
  //     alternativeLabel: {
  //       "@media (max-width: 425px)": {
  //         fontSize: 12,
  //       },
  //       "@media (max-width: 375px)": {
  //         fontSize: 10,
  //       },
  //     },
  //   },
  //   MuiOutlinedInput: {
  //     input: {
  //       padding: "12px 14px",
  //       height: 24,
  //       fontSize: 14,
  //     },
  //     inputMultiline: {
  //       lineHeight: "initial",
  //     },
  //     marginDense: {
  //       margin: 0,
  //     },
  //     root: {
  //       paddingRight: "0px",
  //       width: "100%",
  //       background: "#FFFFFF",
  //       // fontSize: 12,
  //       minHeight: 45,
  //     },
  //     inputAdornedStart: {
  //       paddingTop: 15,
  //     },
  //   },
  //   MuiInputLabel: {
  //     outlined: {
  //       transform: "translate(14px, 17px) scale(1)",
  //     },
  //   },
  //   MuiSelect: {
  //     root: {
  //       display: "flex",
  //       alignItems: "center",
  //     },
  //     icon: {
  //       color: BaseColor.primary,
  //       fontSize: 30,
  //       top: "15%",
  //     },
  //   },
  //   MuiFormControl: {
  //     fullWidth: {
  //       width: "100%",
  //     },
  //     marginDense: {
  //       marginTop: 0,
  //       marginBottom: 0,
  //       backgroundColor: "#FFFF",
  //       width: "100%",
  //     },
  //   },
  //   MuiPagination: {
  //     ul: {
  //       justifyContent: "flex-end",
  //     },
  //   },
  //   MuiChip: {
  //     root: {
  //       borderRadius: "5px",
  //       color: "#FFF",
  //       backgroundColor: BaseColor.primary,
  //     },
  //     deleteIcon: {
  //       color: "#FFF",
  //       "&:hover": {
  //         color: "#FFF",
  //       },
  //     },
  //   },
  //   MuiAutocomplete: {
  //     option: {
  //       "&:hover": {
  //         backgroundColor: "#E4F9F2",
  //       },
  //       fontSize: 14,
  //     },
  //     noOptions: {
  //       fontSize: 14,
  //     },
  //     clearIndicator: {
  //       padding: "0px important",
  //       height: "fit-content",
  //     },
  //     endAdornment: {
  //       display: "flex",
  //       height: "100%",
  //     },
  //   },
  //   PrivateNotchedOutline: {
  //     legendNotched: {
  //       [breakpoints.down("xs")]: {
  //         // maxWidth: "fit-content !important",
  //         // paddingRight: 30,
  //         "& > span": {
  //           // paddingLeft: "0px",
  //           // paddingRight: "0px",
  //           // width: "fit-content",
  //           fontSize: 11,
  //         },
  //       },
  //     },
  //   },
  //   MuiAccordion: {
  //     root: {
  //       "&:before": {
  //         height: "0px !important",
  //       },
  //     },
  //   },
  //   // PrivateNotchedOutline: {
  //   //   root: {
  //   //     borderWidth: 0,
  //   //     borderRadius: 5,
  //   //   },
  //   // },
  //   MuiTabs: {
  //     vertical: {},
  //     indicator: {
  //       left: "0",
  //       width: "5px",
  //     },
  //   },
  //   MuiTab: {
  //     root: {
  //       backgroundColor: "#FAFAFB !important",
  //       margin: "2px 0px",
  //       // minWidth: '600px !important',
  //     },
  //     labelIcon: {
  //       minHeight: "50px",
  //     },
  //     wrapper: {
  //       width: "100%",
  //       flexDirection: "row !important",
  //       textTransform: "capitalize !important",
  //       justifyContent: "flex-start",
  //       alignItems: "center",
  //     },
  //   },
  //   MuiLinearProgress: {
  //     root: {
  //       // height: "28px",
  //       borderRadius: "6px",
  //     },
  //     colorPrimary: {
  //       backgroundColor: "#FFF",
  //     },
  //   },
  //   MuiFormControlLabel: {
  //     root: {
  //       marginLeft: "0 !important",
  //     },
  //     label: {
  //       color: "#373F45 !important",
  //     },
  //     labelPlacementStart: {
  //       // marginLeft: '8px !important',
  //     },
  //   },
  //   MuiRating: {
  //     root: {
  //       fontSize: "inherit !important",
  //     },
  //   },
  //   MuiListItem: {
  //     root: {
  //       "&$selected": {
  //         backgroundColor: "#E4F9F2",
  //       },
  //     },
  //   },
  //   MuiPaper: {
  //     elevation8: {
  //       boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 8px 0px !important",
  //     },
  //   },
  //   MuiMenu: {
  //     paper: {
  //       backgroundColor: "transparent !important",
  //       boxShadow: "none !important",
  //     },
  //     list: {
  //       paddingTop: "0px !important",
  //       paddingBottom: "0px !important",
  //     },
  //   },
  //   MuiAppBar: {
  //     positionFixed: {
  //       zIndex: "1000",
  //     },
  //   },
  //   MuiBreadcrumbs: {
  //     separator: {
  //       "@media (max-width: 425px)": {
  //         marginLeft: 0,
  //         marginRight: 0,
  //       },
  //     },
  //   },
  //   MuiDialogTitle: {
  //     root: {
  //       padding: "20px 24px 16px",
  //     },
  //   },
  // AccordionSummary: {
  //     root: {
  //       minHeight: "20px !important",
  //     },
  //     content: {
  //       margin: "0px !important",
  //     },
  //   },
  //},
});

export const htmlContentStyle = makeStyles({
  style: {
    "& strong": {
      fontFamily: "Mont-Bold",
    },
  },
});

export const htmlContent = makeStyles({
  // Styles to Content Written by user from Editor
  style: {
    "& *": {
      backgroundColor: "transparent !important",
      position: "static !important",
      "@media (max-width: 1024px)": {
        // padding: '0 0 0 16px',
      },
      "@media (max-width: 768px)": {
        padding: "0 0 0 0",
      },
    },
    "& div": {
      width: "100% !important",
      margin: "0px !important",
      padding: "0px !important",
    },
    "& img": {
      borderRadius: 5,
    },
    "& p,span": {
      color: `${BaseColor.black} !important`,
      fontSize: "16px !important",
      fontFamily: `${fonts.mont} !important`,
      "@media (max-width: 425px)": {
        fontSize: "0.9rem !important",
      },
      lineHeight: "1.8rem !important",
      [theme.breakpoints.down("sm")]: {
        lineHeight: "1.6rem !important",
      },
      [theme.breakpoints.down("xs")]: {
        lineHeight: "1.6rem !important",
      },
    },
    "& h1,h2,h3,h4": {
      margin: "1.5rem 0px 1.5rem 0px !important",
      lineHeight: "initial",
      color: "#264653 !important",
      fontFamily: `${fonts.mont} !important`,
      fontSize: "22px !important",
      fontWeight: "400 !important",
      "@media (max-width: 425px)": {
        fontSize: "18px !important",
        margin: "0.5rem 0px 0.5rem 0px !important",
        lineHeight: "1.6rem !important",
      },
    },
    "& a": {
      color: `${BaseColor.primary} !important`,
      "&:hover": {
        color: `${BaseColor.primary}`,
        borderColor: `${BaseColor.primary}`,
        borderBottom: "1px solid",
      },
    },
    "& ul": {
      listStyleType: "none  !important",
      color: BaseColor.primary,
      listStylePosition: "outside  !important",
      padding: "0px 2.8rem !important",
      "& > li": {
        color: `${BaseColor.black} !important`,
        fontSize: "16px !important",
        fontFamily: `${fonts.mont} !important`,
        "@media (max-width: 425px)": {
          fontSize: "0.9rem !important",
        },
        lineHeight: "1.8rem !important",
        [theme.breakpoints.down("sm")]: {
          lineHeight: "1.6rem !important",
        },
        [theme.breakpoints.down("xs")]: {
          lineHeight: "1.6rem !important",
        },
        "&:before": {
          listStyleType: "circle",
          content: '"•"',
          fontWeight: "bold",
          display: "inline-block",
          width: "1em",
          marginLeft: "-1em",
          color: BaseColor.primary,
          fontSize: "26px",
          [theme.breakpoints.down("sm")]: {},
          "@media (max-width: 425px)": {
            fontSize: "20px",
          },
        },
      },
    },
    "& table": {
      margin: "15px 0 !important",
      borderCollapse: "collapse",
      overflowX: "scroll !important",
      width: "100%",
      "& th, td": {
        padding: 5,
        borderBottom: "1px solid #e0e2e4 !important",
        borderRight: "1px solid #e0e2e4 !important",
        borderTop: "1px solid #e0e2e4 !important",
        borderLeft: "1px solid #e0e2e4 !important",
        minWidth: "90px",
        lineHeight: "1.5rem",
      },
      "& tr:first-child": { backgroundColor: "#2A9D8F50 !important" },
      "& tr:only-child": {
        backgroundColor: "transparent !important",
        "& th, td": {
          borderTop: "0px solid #e0e2e4 !important",
          borderLeft: "0px solid #e0e2e4 !important",
          borderBottom: "0px solid #e0e2e4 !important",
          borderRight: "0px solid #e0e2e4 !important",
        },
      },
      "@media (max-width: 1024px)": {
        margin: "15px 15px !important",
      },
      "@media (max-width: 768px)": {
        margin: "15px 0 !important",
        width: "100% !important",
      },
    },
    "& ol": {
      padding: "0px 2.5rem !important",
      "& > li": {
        color: `${BaseColor.black} !important`,
        fontSize: "16px !important",
        fontFamily: `${fonts.mont} !important`,
        "@media (max-width: 425px)": {
          fontSize: "0.9rem !important",
        },
        lineHeight: "1.8rem !important",
        [theme.breakpoints.down("sm")]: {
          lineHeight: "1.6rem !important",
        },
        [theme.breakpoints.down("xs")]: {
          lineHeight: "1.6rem !important",
        },
        "&:before": {
          color: BaseColor.primary,
          marginRight: "16px",
          fontSize: "26px",
          [theme.breakpoints.down("sm")]: {
            marginRight: "16px",
          },
          "@media (max-width: 425px)": {
            marginRight: "16px",
            fontSize: "20px",
          },
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0px 1rem !important",
    },
    maxWidth: "100% !important",
    wordBreak: "break-word",
    // whiteSpace: 'pre-line',
  },
});

export default theme;
