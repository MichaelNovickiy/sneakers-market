import React from 'react';
import ContentLoader from "react-content-loader";

const Home = () => {

    return (
        <ContentLoader
            speed={2}
            width={335}
            height={490}
            viewBox="0 0 335 490"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"

        >
            <rect x="0" y="0" rx="0" ry="0" width="300" height="392"/>
            <rect x="0" y="404" rx="0" ry="0" width="187" height="25"/>
            <rect x="0" y="450" rx="0" ry="0" width="60" height="17"/>
            <rect x="180" y="440" rx="18" ry="18" width="120" height="36"/>
        </ContentLoader>
    );
};

export default Home;