import React from 'react';
export default function Avatar({ url, user }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <img
        src={user.avatar_url}
        width={50}
        height={50}
        style={{
          borderRadius: 25,
        }}
      />
      <div>{user.name}</div>
    </div>
  );
}
