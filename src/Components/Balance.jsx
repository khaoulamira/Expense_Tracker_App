import { useEffect, useState } from "react"


function Balance({balance}) {
    const [currentBallance, setCurrentballance] = useState(0);
    useEffect(() => {
        setCurrentballance(balance);
    },[balance])
  return (
      <div className="bg-white border  text-center">
          <p className="lead mt-3">
              <span className="fw-bold mr-2"></span>
              La baLance
              <span className="badge bg-success">${ currentBallance}</span>
          </p>
      
    </div>
  )
}

export default Balance
