import React from "react";
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import MyReceptions from "../../pages/MyReceptions/MyReceptions";
import MyProfileInfo from "../../pages/MyProfileInfo/MyProfileInfo";
import ChangePassword from "../../pages/ChangePassword/ChangePassword";
import {USER_ROLE} from "../../../constant/userConstant/userRole";
import Register from "../../pages/Register/Register";
import RegisterDoctor from "../../pages/RegisterDoctor/RegisterDoctor";
import BlockUser from "../../pages/BlockUser/BlockUser";
import UnlockUser from "../../pages/UnlockUser/UnlockUser";
import AddMedicalService from "../../pages/AddMedicalService/AddMedicalService";
import DeleteMedicalService from "../../pages/DeleteMedicalService/DeleteMedicalService";
import Reception from "../../pages/Reception/Reception";
import ReceptionContainer from "../../../containers/ReceptionContainer/ReceptionContainer";
import MyReceptionsContainer from "../../../containers/MyReceptionsContainer/MyReceptionsContainer";
import RegisterContainer from "../../../containers/RegisterContainer/RegisterContainer";
import RegisterDoctorContainer from "../../../containers/RegisterDoctorContainer/RegisterDoctorContainer";
import BlockUserContainer from "../../../containers/BlockUserContainer/BlockUserContainer";
import UnlockUserContainer from "../../../containers/UnlockUserContainer/UnlockUserContainer";
import AddMedicalServiceContainer from "../../../containers/AddMedicalServiceContainer/AddMedicalServiceContainer";
import DeleteMedicalServiceContainer
    from "../../../containers/DeleteMedicalServiceContainer/DeleteMedicalServiceContainer";
import ChangePasswordContainer from "../../../containers/ChangePasswordContainer/ChangePasswordContainer";

const MyProfile = ({
                       isAuth,
                       me,
                       isProfileUpdate,
                       errorMessage,
                       updateUserDates,
                       updateDoctorProfilePhoto
                   }) => {


    return (
        <div>
            {
                isAuth ?
                    <div>
                        <nav>
                            <ul>
                                <li><NavLink to={`/my-profile/info`}>Інформація про мене</NavLink></li>
                                {
                                    me.UserRole.label === USER_ROLE.PATIENT &&
                                    <li><NavLink to={`/my-profile/my-receptions`}>Мої записи на прийом</NavLink></li>
                                }
                                {
                                    me.UserRole.label === USER_ROLE.DOCTOR &&
                                    <li><NavLink to={`/my-profile/reception-patient`}>Записати на прийом</NavLink></li>

                                }
                                {
                                    me.UserRole.label === USER_ROLE.DOCTOR &&
                                    <li><NavLink to={`/my-profile/receptions`}>Записи на прийом</NavLink></li>

                                }


                                <li><NavLink to={`/my-profile/change-password`}>Змінити пароль</NavLink></li>

                                {
                                    me.UserRole.label === USER_ROLE.ADMIN &&
                                    <li><NavLink to={`/my-profile/register-admin`}>Зареєструвати нового
                                        адміністратора</NavLink></li>

                                }

                                {
                                    me.UserRole.label === USER_ROLE.ADMIN &&
                                    <li><NavLink to={`/my-profile/register-doctor`}>Зареєструвати лікаря</NavLink></li>

                                }

                                {
                                    me.UserRole.label === USER_ROLE.ADMIN &&
                                    <li><NavLink to={`/my-profile/block-user`}>Заблокувати користувача</NavLink></li>

                                }

                                {
                                    me.UserRole.label === USER_ROLE.ADMIN &&
                                    <li><NavLink to={`/my-profile/unlock-user`}>Розблокувати користувача</NavLink></li>

                                }
                                {
                                    me.UserRole.label === USER_ROLE.ADMIN &&
                                    <li><NavLink to={`/my-profile/add-service`}>Додати нову медичну послугу</NavLink>
                                    </li>

                                }
                                {
                                    me.UserRole.label === USER_ROLE.ADMIN &&
                                    <li><NavLink to={`/my-profile/delete-service`}>Видалити медичну послугу</NavLink>
                                    </li>

                                }


                            </ul>
                        </nav>

                        <Switch>
                            {
                                me.UserRole.label === USER_ROLE.PATIENT &&
                                <Route path={`/my-profile/my-receptions`} exact
                                       render={() => <MyReceptionsContainer/>}/>
                            }
                            {
                                me.UserRole.label === USER_ROLE.DOCTOR &&
                                <Route path={`/my-profile/receptions`} exact
                                       render={() => <MyReceptionsContainer/>}/>
                            }
                            {
                                me.UserRole.label === USER_ROLE.DOCTOR &&
                                <Route path={`/my-profile/reception-patient`} exact
                                       render={() => <ReceptionContainer/>}/>
                            }
                            <Route path={`/my-profile/info`} exact
                                   render={() => <MyProfileInfo me={me} avatar={me.avatar}
                                                                isProfileUpdate={isProfileUpdate}
                                                                errorMessage={errorMessage}
                                                                updateDoctorProfilePhoto={updateDoctorProfilePhoto}
                                                                updateUserDates={updateUserDates}
                                   />}/>

                            <Route path={`/my-profile/change-password`} exact
                                   render={() => <ChangePasswordContainer/>}/>

                            {
                                me.UserRole.label === USER_ROLE.ADMIN &&
                                <Route path={`/my-profile/register-admin`} exact render={() => <RegisterContainer/>}/>

                            }

                            {
                                me.UserRole.label === USER_ROLE.ADMIN &&
                                <Route path={`/my-profile/register-doctor`} exact
                                       render={() => <RegisterDoctorContainer/>}/>

                            }

                            {
                                me.UserRole.label === USER_ROLE.ADMIN &&
                                <Route path={`/my-profile/block-user`} exact render={() => <BlockUserContainer/>}/>

                            }
                            {
                                me.UserRole.label === USER_ROLE.ADMIN &&
                                <Route path={`/my-profile/unlock-user`} exact render={() => <UnlockUserContainer/>}/>

                            }
                            {
                                me.UserRole.label === USER_ROLE.ADMIN &&
                                <Route path={`/my-profile/add-service`} exact
                                       render={() => <AddMedicalServiceContainer/>}/>

                            }
                            {
                                me.UserRole.label === USER_ROLE.ADMIN &&
                                <Route path={`/my-profile/delete-service`} exact
                                       render={() => <DeleteMedicalServiceContainer/>}/>

                            }

                            <Route path={`/my-profile`} render={() => <Redirect to={`/my-profile/info`}/>}/>

                        </Switch>
                    </div> :

                    <Redirect to={'/login'}/>
            }
        </div>
    )
};

export default MyProfile