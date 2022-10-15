import React from 'react';
import Widget from './Widget';
import Avatar from './Avatar';
export default function RightBar() {
  const user = {
    id: 1,
    name: 'manjunath kalburgi',
    date: '20-2-22',
    avatar_url:
      'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
  };
  return (
    <div style={{ margin: 20 }}>
      <button type="button" title="Get Unlimited Access">
        Get Unlimited Access
      </button>
      <div className="search_bar">
        <input type="search" placeholder="Search" />
      </div>
      <div>
        <Avatar user={user} />
        <div>199 Followers</div>
        <div>
          About:Forex Trader | Experienced Non-Fiction eBook Ghostwriter |
          Blogger | Personal Development Enthusiast
        </div>
        <div>
          <button type="button">Follow</button>
          <button type="button">Subscribe</button>
        </div>
      </div>
      <Widget title={'More from Medium'} />
      <Widget title={'Recommended topics'} />
      Staff Picks
      Who to follow
      Recently saved
    </div>
  );
}
