import React from "react";
import {Field} from 'redux-form'
import {emailValidator, requiredValidator} from "../../../validators/validators";
import {InputCreator} from "../../../helpers/FormCreator/FormCreator";
import style from "../../../App.module.css";

export const SendMailForRememberPasswordForm = props => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <label htmlFor="email">Введіть емейл: </label>
                </div>
                <Field
                    name={"email"}
                    component={InputCreator}
                    placeholder={"Введіть емейл..."}
                    type={"email"}
                    autoFocus
                    validate={[requiredValidator,emailValidator]}
                />
                {props.errorMessage && <div className={style.requiredStar}>{props.errorMessage}</div>}

            </div>

            <button type={"submit"}>Підтвердити</button>

        </form>
    )
};