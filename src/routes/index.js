import routesConfig from '~/config/routes';
//Layout
import { HeaderOnly } from '~/components/Layout';

import HomePage from '~/pages/Home';
import FollowingPage from '~/pages/Following';
import ProfilePage from '~/pages/Profile';
import UploadPage from '~/pages/Upload';
import SearchPage from '~/pages/Search';

const publicRoutes = [
    { path: routesConfig.home, component: HomePage },
    { path: routesConfig.following, component: FollowingPage },
    { path: routesConfig.profile, component: ProfilePage },
    { path: routesConfig.upload, component: UploadPage, layout: HeaderOnly },
    { path: routesConfig.search, component: SearchPage, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
