import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { LoggedInContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser, setLoggedInUser] = useContext(LoggedInContext)
    return (
        <Route
            {...rest}
            render={({ location }) =>
            loggedInUser.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;