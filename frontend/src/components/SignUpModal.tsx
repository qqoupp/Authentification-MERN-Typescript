import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import TextInputField from "./form/TextInputField";
import { User } from "../models/user";
import { SignUpCredentials } from "../network/api";
import * as Api from "../network/api";
import { ConflictError } from "../errors/http_errors";

interface SignUpModalProps {
    onDismiss: () => void,
    onSignUpSuccessful: (user: User) => void,
}

const SignUpModal = ({ onDismiss, onSignUpSuccessful }: SignUpModalProps) => {
    const [errorText, setErrorText] = useState<string | null>(null);
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignUpCredentials>();

    async function onSubmit(credentials: SignUpCredentials) {
        try {
            const newUser = await Api.signUp(credentials);
            onSignUpSuccessful(newUser);
        } catch (error) {
            if (error instanceof ConflictError) {
                setErrorText(error.message);
            } else {
                setErrorText('An error occurred during sign up.');
            }
            console.error(error);
        }
    }

    return (
        <Modal show onHide={onDismiss} centered>
            <Modal.Header closeButton>
                <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {errorText && <Alert variant="danger">{errorText}</Alert>}
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <TextInputField
                        name="username"
                        label="Username"
                        type="text"
                        placeholder="Username"
                        register={register}
                        registerOptions={{ required: "Username is required" }}
                        error={errors.username}
                    />
                    <TextInputField
                        name="email"
                        label="Email"
                        type="email"
                        placeholder="Email"
                        register={register}
                        registerOptions={{ required: "Email is required" }}
                        error={errors.email}
                    />
                    <TextInputField
                        name="password"
                        label="Password"
                        type="password"
                        placeholder="Password"
                        register={register}
                        registerOptions={{ required: "Password is required" }}
                        error={errors.password}
                    />
                    <Button
                        variant="outline-dark"
                        type="submit"
                        disabled={isSubmitting}
                        color='#263238'
                        className="mt-3 w-100"
                    >
                        Sign Up
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default SignUpModal;
