import React, { Fragment } from 'react';
import { Edit } from 'react-feather';
import { Link } from 'react-router-dom';
import man from '../../../assets/images/dashboard/user.png';
import { ELANA, GeneralManager } from '../../../constant';

const UserPanel = () => {
    const url = '';
    return (
        <Fragment>
            <div className="sidebar-user text-center">
                <div>
                    <img className="img-60 rounded-circle lazyloaded blur-up" src={url ? url : man} alt="#" />
                    <div className="profile-edit">
                        <Link to={`${process.env.PUBLIC_URL}/users/userEdit`}>
                            <Edit />
                        </Link>
                    </div>
                </div>
                <h6 className="mt-3 f-14">{ELANA}</h6>
                <p>{GeneralManager}.</p>
            </div>
        </Fragment>
    );
};

export default UserPanel;