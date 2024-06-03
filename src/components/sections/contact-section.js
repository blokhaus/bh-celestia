import React from 'react';

const ContactSection = () => {
    return (
        <section className={'contact-section'}>
            <div className={'container'}>
                <div className={'box'}>
                    <div className={'row justify-content-between align-items-center'}>
                        <div className={'col-12 col-md-auto'}>
                            <div className={'row flex-md-nowrap align-items-center'}>
                                <div className={'col-12 col-md-auto'}>
                                    placeholder image
                                </div>
                                <div className={'col-12 col-md-auto pt-3 pt-md-0'}>
                                    <div className={'title'}>Explore your options</div>
                                    Contact us to find solutions for your app's needs.
                                </div>
                            </div>
                        </div>
                        <div className={'col-12 col-md-auto mt-3 mt-md-0'}>
                            <a href="https://celestia-intake.typeform.com/interest/" className={'button button-simple plausible-event-name=Get_in_touch_button--Developer_Portal-Contact_Section'} target="_blank">Get In Touch</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
