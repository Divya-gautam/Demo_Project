import React from 'react'

export default function Home() {
  return (
    <div>
      <div className="container mt-5">
    <div className="row">
        <div className="col-md-6">
            <h1>Welcome to Our Website</h1>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href="/dashboard" className="btn btn-primary">Get Started</a>
        </div>
        <div className="col-md-6">
            <img src="https://chiefofstaffkc.com/wp-content/uploads/2021/03/Welcome-scaled.jpg" alt="Welcome Image" className="img-fluid rounded-circle"/>
        </div>
    </div>
</div>

    </div>
  )
}
