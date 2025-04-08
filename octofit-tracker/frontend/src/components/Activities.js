import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://expert-acorn-7v745r9qvgvcprjj-8000.app.github.dev/api/activities')
      .then(response => response.json())
      .then(data => setActivities(data));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Activities</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, index) => (
            <tr key={activity.id}>
              <th scope="row">{index + 1}</th>
              <td>{activity.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Activities;
