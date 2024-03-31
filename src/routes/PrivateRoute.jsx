import { Suspense } from "react";
import { Outlet } from 'react-router-dom';

const loading = () => <div className=""></div>;
const PrivateRoute = ({ roles, ...rest }) => {
    return (
        <Suspense fallback={loading()}>
            <Outlet />
        </Suspense>
    );
};

export default PrivateRoute;