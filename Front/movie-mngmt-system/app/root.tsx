import { Outlet, useNavigation } from "react-router";
import { Layout as L } from "~/layout.js"

export const Layout = L;

export default function App() {
    const { location } = useNavigation();
    const isTransitioning = Boolean(location);

    return (
        <>
            {isTransitioning && <div>Loading</div>}
            <Outlet />
        </>
    );
}