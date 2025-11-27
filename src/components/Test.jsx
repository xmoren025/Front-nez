import { ProtectedRoute } from "@/components/ProtectedRoute";

import React from 'react'

function Test() {
  return (
    <div>Test</div>
  )
}

export default ProtectedRoute(Test)