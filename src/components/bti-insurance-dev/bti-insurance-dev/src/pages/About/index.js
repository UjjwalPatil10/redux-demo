import React from 'react';
import { Breathcumb } from '../../components/Breathcumb';
import Img1 from './assets/about.jpeg';

export const About = () => {
    return (
        <>
            <Breathcumb title='About Us' description='' />
            <section className='pt-5 pb-5 lg:pb-20  lg:pt-20 ' >
                <div className='container mx-auto'>
                    <div className='bg-white shadow sm:rounded-lg p-10'>
                        <div className='grid md:grid-cols-3 grid-cols-1'>
                            <div>
                                <img src={Img1} className='rounded-xl shadow-xl' />
                            </div>
                            <div className='col-span-2 lg:px-10 mt-10 md:mt-0 md:px-10'>
                                <div className='section-title text-left border-b pb-5'>
                                    <h6 className='font-semibold text-muted'>ABOUT COMPANY -</h6>
                                    <h4 className='font-bold text-primary text-4xl'>
                                        Building a safer future
                                        <span className=' text-blue'> for you and your family</span>
                                    </h4>
                                </div>
                                <div className='description mt-4'>
                                    <h5 className='text-muted text-2xl font-bold mt-8'>Balearic Defective Title Insurance S.L (BTI)</h5>
                                    <p className='text-primary text-justify mt-2'>
                                        Is a Spanish regulated insurer, authorised by the Prudential Regulation Authority and regulated by Direccion General de Seguros (DGS) and Comisión Nacional del Mercado de Valores (CNMV) which commands strong insurer financial strength ratings from major agencies and is authorised and regulated to issue policies in Spain.
                                    </p>
                                    <p className='text-primary text-justify mt-4'>
                                        At Balearic Defective Title Insurance S.L we are dedicated to helping property owners, developers and lenders protect investment and maximise returns. Our underwriting teams include in-house lawyers and experts in a variety of property-related disciplines. They have a common objective - to develop effective partnerships with all our clients so that we can get to the root of the problem quickly and provide the right insurance solution every time.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='pb-5 lg:pb-20' >
                <div className='container mx-auto'>
                    <div className="overflow-hidden bg-white shadow sm:rounded-lg p-10">
                        <div className='section-title text-center border-b pb-5'>
                            <h6 className='font-semibold text-muted'>SUMMARY -</h6>
                            <h4 className='font-bold text-primary text-4xl'>
                                Executive
                                <span className=' text-blue'> Summary</span>
                            </h4>
                        </div>
                        <div className='description mt-10'>
                            <p className='text-primary text-justify mt-2'>
                                At a rough estimate around 75% of all properties in The Balearics are exposed to some form of defect in their title and/or missing legal documents, that cannot be recovered or take months to locate, if at all, due to an antiquated registration system and a ponderous administration process.
                            </p>
                            <p className='text-primary text-justify mt-4'>
                                In Spain, the ownership of properties, a property’s title details, existing easements or restrictive covenants, planning restrictions or existing disputes, or even the sale prices are not generally publicly available, unlike in the UK for example where the minutiae of every property are instantly available to all at the touch of a button via land registry online, and official copies of title are updated hours after a transaction or any electronic filing of property changes. Therefore, countless deals fall through, or never make it to fruition due to endless:
                            </p>

                            <div className="mt-4">
                                <ul role="list" className="list-disc space-y-2 pl-4 text-sm text-primary ">
                                    <li className="">
                                        <span className="text-base text-muted">
                                            administrative delays/oversights/errors/misplaced documents;
                                        </span>
                                    </li>
                                    <li className="">
                                        <span className="text-base text-muted">
                                            title uncertainties
                                        </span>
                                    </li>
                                    <li className="">
                                        <span className="text-base text-muted">
                                            an inability to obtain funding from banks;
                                        </span>
                                    </li>
                                    <li className="">
                                        <span className="text-base text-muted">
                                            continually shifting planning regulations
                                        </span>
                                    </li>
                                    <li className="">
                                        <span className="text-base text-muted">
                                            poor previous legal advice (or zero legal advice, as quite often buyers and especially sellers do not even use qualified lawyers to name but a few reasons.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className='pb-5 lg:pb-20' >
                <div className='container mx-auto'>
                    <div className="overflow-hidden bg-white shadow sm:rounded-lg p-10">
                        <div className='section-title text-center border-b pb-5'>
                            <h6 className='font-semibold text-muted'>OFFER -</h6>
                            <h4 className='font-bold text-primary text-4xl'>
                                The solution offered
                                <span className=' text-blue'> By BTI</span>
                            </h4>
                        </div>

                        <div className='description mt-10'>
                            <p className='text-primary text-justify mt-3'>
                                1. To provide the conveyancing market (to sellers, buyers, real estate agents, banks etc.), with a user friendly, super marketable product;
                            </p>
                            <p className='text-primary text-justify mt-3'>
                                2. To create confidence for all the stakeholders in the transaction by indemnifying the Insured against defects in the title of a property , thereby giving comfort to the Buyer &/or Seller on the vagaries of the current conveyancing process.
                            </p>
                            <p className='text-primary text-justify mt-3'>
                                3. To drive efficiency and certainty into the transaction process.
                            </p>
                            <p className='text-primary text-justify mt-3'>
                                4. To enable banks to lend against properties that are open to the current uncertainties manifest in the conveyancing process.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='pb-5 lg:pb-20 ' >
                <div className='container mx-auto'>
                    <div className="overflow-hidden bg-white shadow sm:rounded-lg p-10 ">
                        <div className='section-title text-center border-b pb-5'>
                            <h6 className='font-semibold text-muted'>CURRENT REALITY -</h6>
                            <h4 className='font-bold text-primary text-4xl'>
                                Spanish conveyancing -
                                <span className=' text-blue'> the current reality</span>
                            </h4>
                        </div>

                        <div className='description mt-10'>
                            <p className='text-primary text-justify mt-2'>
                                There is an inherent almost institutionalized blockage in the Balearic conveyancing system (at its most acute in Ibiza), which has reached its zenith in recent years due to many external factors, that we believe can be drastically removed by applying a fresh and forward thinking approach to the use and radical adaptation of a long standing market product.
                            </p>
                            <p className='text-primary text-justify mt-4'>
                                The lack of documents and up-to-date available information on properties in the Balearics, creates constant problems in many deals. In 90% of the files we work on, we find these kinds of problems that can scare the investors and break the deal on many occasions.
                            </p>
                            <p className='text-primary text-justify mt-4'>
                                A product like the one we are offering would help this situation immensely, as it would give total secureness and confidence to the investor in this kind of situation. More often than not, what is missing are documents to prove the legality (from a planning regulation perspective) of all the existing buildings in the property (pool, garage, terraces etc.), sometimes because they are lost, other times because they were built without permission. This leads us to a situation known as “Out of planning regulations”. Most of the time, the possible infraction has been “prescribed”, which means that those 4 SWA 26.10.21 BP2 buildings built without obvious permission cannot be demolished, and nor can the owner be fined. For those cases, the biggest worry would be a natural disaster occurring, such as flooding, or fire, as those buildings, without permission, could not be rebuilt. Also, any parts of the property built without license cannot be included at the moment in a bank’s valuation of the property, making its official value less of course. An insurance against this, would definitely help a foreign investor on his decision, and also would add value to the property.
                            </p>
                            <p className='text-primary text-justify mt-4'>
                                It is also important to state here that currently, the public officials at the local town halls rarely, if at all, act ‘ex-officio’ (i.e. bring owners to court for so called planning offences), so for the cases where the infraction has not been “prescribed”, then the chances of being fined and forced to demolish or remediate a building, are extremely low, meaning that any claims under the proposed insurance policy are accordingly likely to be extremely low.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
