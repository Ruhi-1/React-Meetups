const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image: 'https://imgur.com/a/XUWxAAR',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description: 'This is a first amazing meetup',
    },
    {
        id: 'm2',
        title: 'This is a Second meetup',
        image: 'https://imgur.com/a/XUWxAAR',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description: 'This is a first amazing meetup',
    }
]

function AllMeetupsPage() {
  return (
      <section>
          <h1>All Meetups</h1>
          <ul>
              {DUMMY_DATA.map((meetup) => {
                  return <li key={meetup.id}>{meetup.title}</li>;
              })}
          </ul>
      </section>
  )
}

export default AllMeetupsPage;
