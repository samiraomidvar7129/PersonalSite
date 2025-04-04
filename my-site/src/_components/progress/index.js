import React from 'react';
import './progress.css';

function ProgressBar() {
  return (
    <div>
       <div className="progress">
            <div
                className="progress-bar"
                role="progressbar"
                style={{ width: '75%' }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
            >
                75%
            </div>
        </div>
    </div>
  )
}

export default ProgressBar;
