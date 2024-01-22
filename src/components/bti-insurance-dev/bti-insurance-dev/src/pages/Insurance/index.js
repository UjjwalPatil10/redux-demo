import React from 'react';
import { Breathcumb } from '../../components/Breathcumb';

export const Insurance = () => {
    return (
        <>
            <Breathcumb title='Insurance' description='' />
            <section className='pb-5 lg:pb-20 mt-5 lg:mt-20 ' >
                <div className='container mx-auto'>
                    <div className=" bg-white shadow sm:rounded-lg p-10">
                        <div className='section-title text-center border-b pb-5'>
                            <h6 className='font-semibold text-muted'>OUTLINE -</h6>
                            <h4 className='font-bold text-primary text-4xl'>
                                Product
                                <span className=' text-blue'> Outline</span>
                            </h4>
                        </div>
                        <div className='description mt-10'>
                            <h5 className='text-muted text-2xl font-bold mb-5'>What we are proposing is a Policy for the *Insured for:</h5>
                            <p className='text-primary text-justify mt-2'>
                                1) Plugging a risk gap where a buyer is in the process of buying a property and/or a seller is in the process of selling or even listing its property ready to put on the market and finding that either the previous owners did not comply with for example planning permissions or the current owner has carried out works without planning permission, or there are onerous yet antiquated restrictive covenants/easements burdening the property title.
                            </p>
                            <p className='text-primary text-justify mt-4'>
                                2) Remedial costs associated with correcting the property to meet the agreed planning permissions should this be required.
                            </p>
                            <p className='text-primary text-justify mt-4'>
                                3) Period of Insurance – Industry accepted standard which is either 20 years from the granting of the policy or in perpetuity. Policy to be assignable on future sales of the property. Example of a recent policy granted in the UK is attached and we will use this as a broad basis to adapt to the Balearic model. The major difference being the premiums that can be charged here as market forces are different and this will be the only active product on the market here.
                            </p>
                        </div>

                        <div className='description mt-10'>
                            <h5 className='text-muted text-2xl font-bold mb-5'>NB</h5>
                            <p className='text-primary text-justify mt-2'>
                                <strong>A.</strong> This policy is not designed to pay for retrospectively upgrading a property to new legislations or standards and it is there to provide a Sleep Easy to the Buyer, the Seller and the Bank.
                            </p>
                            <p className='text-primary text-justify mt-4'>
                                <strong>B.</strong> We are not seeking latent defects cover. Just Remediation Costs that the Insured incurs to comply with Local Authority enforcing the planning law.
                            </p>
                        </div>

                        <div className='description mt-10'>
                            <h5 className='text-blue text-2xl font-bold '>Therefore Proposed Insuring Clause and outline of Policy Structure:</h5>
                            <h5 className='text-muted text-2xl font-bold mb-5'>Insuring Clause</h5>
                            <p className='text-primary text-justify mt-2'>
                                In addition, the Insurer shall pay the costs, legal fees and expenses incurred in the defence of any matter indemnified under this Policy, but only to the extent provided in the Conditions and as per the Limit of Indemnity as stated in the Schedule.
                            </p>
                            <p className='text-primary text-justify mt-2'>
                                In addition, the Insurer shall pay the costs, legal fees and expenses incurred in the defence of any matter indemnified under this Policy, but only to the extent provided in the Conditions and as per the Limit of Indemnity as stated in the Schedule.
                            </p>
                        </div>

                        <div className='description mt-10'>
                            <h5 className='text-muted text-2xl font-bold '>*Equally the Insured could be the Buyer or Seller, much the same as in Warranty & Indemnity Insurance you have “Buy Side” & “Sell Side” policies issued. Example 1. 5 SWA 26.10.21 BP2</h5>
                            <p className='text-primary text-justify mt-2'>
                                A property valued at €750,000 in Ibiza has a swimming pool that was built without a license, and there is a very small risk that in the next say 3 years the local council can issue an order asking for the pool to be filled in. The estimated value of the house then would be €500,000. The €250,000 difference would be insured against and an insurance premium paid as a percentage of this difference.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
