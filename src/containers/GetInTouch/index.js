import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Modal } from '@redq/reuse-modal';
import Google from 'common/assets/image/social/Google.svg';
import Instagram from 'common/assets/image/social/Instagram.svg';
import LinkedIn from 'common/assets/image/social/Linkedin.svg';
import Facebook from 'common/assets/image/social/Facebook.svg';
import Twitter from 'common/assets/image/social/Twitter.svg';
import image from 'common/assets/image/Git/git.svg';
import {
    FormContainer, GitWrapper, GitDescription, FieldWrapper,
    FormRow, FormRowFirst, ImageWrapper, SocialContainer, FormSubmit
} from './git.style';
//import { Modal } from 'react-responsive-modal';


const GetInTouch = () => {
    const [open, setOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const [loading, setLoading] = useState(false);

    const onCloseModal = () => setOpen(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm(
                'service_kxi5aty',
                'template_ioiwhud',
                e.target,
                'user_gjrruaTXwZlNwNWAp9aUZ'
            )
            .then((result) => {
                console.log(result);
                setModalMessage(
                    result.status == 200
                        ? 'Your message was well recieved'
                        : 'There was a problem, Try Again!'
                );
                setOpen(true);
                setLoading(false);
                e.target.reset();
            })
            .catch((err) => {
                console.log(err);
                setModalMessage('There was a problem, Try Again!');
                setOpen(true);
                setLoading(false);
            });
    };
    return (
        <>

            <GitWrapper>
                <GitDescription>
                    <h2>Get in touch</h2>
                    <h4>
                        Fill out the form with your contact details if you have any
                        inquiries or want to know more about our mission.
                    </h4>
                    <SocialContainer>
                        <a href='http://emailjs.com/'>
                            <img src={Google} alt='Google' />
                        </a>
                        <a href='https://www.instagram.com/instantpickupuk/'>
                            <img src={Instagram} alt='Google' />
                        </a>
                        <a href='https://www.linkedin.com/company/53523659/'>
                            <img src={LinkedIn} alt='Google' />
                        </a>
                        <a href='https://www.facebook.com/instantpickupuk'>
                            <img src={Facebook} alt='Google' />
                        </a>
                        <a href='https://twitter.com/Instantpickupuk'>
                            <img src={Twitter} alt='Google' />
                        </a>
                    </SocialContainer>
                    <ImageWrapper>
                        <img src={image} alt='Get in Touch' />
                    </ImageWrapper>
                </GitDescription>

                <FormContainer onSubmit={handleSubmit}>
                    <FormRowFirst id='first'>
                        <FieldWrapper>
                            <label htmlFor='first-name'>First Name <span>*</span></label>
                            <input
                                id='first-name'
                                type='text'
                                name='first_name'
                                placeholder='Your First Name'
                                required
                            />
                        </FieldWrapper>
                        <FieldWrapper>
                            <label htmlFor='last-name'>Last Name<span>*</span></label>
                            <input
                                id='last-name'
                                type='text'
                                name='last_name'
                                placeholder='Your Last Name'
                                required
                            />
                        </FieldWrapper>
                    </FormRowFirst>
                    <FormRow>
                        <FieldWrapper>
                            <label htmlFor='email'>Email<span>*</span></label>
                            <input
                                id='email'
                                type='email'
                                name='email'
                                placeholder='Enter Your Email'
                                required
                            />
                        </FieldWrapper>
                    </FormRow>
                    <FormRow>
                        <FieldWrapper>
                            <label htmlFor='message'>Message<span>*</span></label>
                            <textarea
                                id='message'
                                placeholder='Enter your message'
                                name='message'
                                style={{ resize: 'none' }}
                                required
                            />
                        </FieldWrapper>
                    </FormRow>
                    <FormSubmit type='submit' value='Send Inquiry' />

                </FormContainer>
            </GitWrapper>
            <Modal
                open={open}
                onClose={onCloseModal}
                center
                showCloseIcon={false}
                classNames={{
                    overlay: 'conatactUsModalOverlay',
                    modal: 'conatactUsModal',
                }}
            >
                {modalMessage}
            </Modal>


        </>
    );
};

export default GetInTouch;
