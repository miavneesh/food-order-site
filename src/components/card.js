import React from 'react'

export default function card() {
  return (
      <div>
        <div className="card mt-3" style={{ width: "20rem" }}>
          <img className="card-img-top" src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Important text.</p>
            <div className="container w-100">
              <select className="m-2 h-100 bg-success rounded">
                {Array.from(Array(4), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>

              <select className="m-2 h-100 bg-success rounded">
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className="d-inline h-100 fs-5">Total Amount</div>
            </div>
          </div>
        </div>
      </div>
       
  )
}
