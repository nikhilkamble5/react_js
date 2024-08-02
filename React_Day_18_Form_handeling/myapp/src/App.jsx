import React from 'react'

const App = () => {
  return (
    <>
    
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h1>REact Form handeling</h1>
        </div>


        <div className="col-md-12">
          {/* nested grid */}
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="">Enter first name</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="">Enter last name</label>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App