import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ContentWrapper } from './Layout.styled';


const Layout = () => {
return (
<>
    <ContentWrapper>
        <header>
        </header>
        <main> 
            <Suspense>
                <Outlet />
            </Suspense>
        </main>
    </ContentWrapper>    
</>
);
};

export default Layout;