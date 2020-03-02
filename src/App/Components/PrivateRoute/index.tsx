import React, { memo } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IApplicationState } from 'App/Redux/Modules';
import Layout from '../Layout';

type IProps<T> = {
  component: React.ComponentType<T>;
  path: string;
};
function PrivateRoute<T>(props: IProps<T>) {
  const userIsAuthenticate = useSelector(
    (state: IApplicationState) => !!state.auth.token
  );
  const { component: Component, ...innerProps } = props;
  return (
    <Route
      {...innerProps}
      exact
      render={(routeProps: any): JSX.Element => {
        if (userIsAuthenticate)
          return (
            <Layout>
              <Component {...routeProps} />
            </Layout>
          );

        return (
          <Redirect
            to={{ pathname: '/401', state: { from: routeProps.location } }}
          />
        );
      }}
    />
  );
}

export default memo(PrivateRoute);
