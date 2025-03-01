import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <head>
        <meta name="description" content="Hello this is my first web page!." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="src/styles.css" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <title>Netflix India - Watch TV Shows Online, Watch Movies Online</title>
        <link
          rel="icon"
          href="http://pngimg.com/uploads/netflix/small/netflix_PNG15.png"
        />
      </head>
      <body>
        <Outlet />

      </body>
    </>
  )
}

export default Layout;