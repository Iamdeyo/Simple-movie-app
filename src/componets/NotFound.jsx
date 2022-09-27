import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <div className="container">
        <div className="row text-center mt-5">
          <h1 className="my-text-color">404, Page Not Found</h1>
          <p>
            Click on the link to go back to{' '}
            <Link className="text-primary text-decoration-underline" to={'/'}>
              Homepage
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
