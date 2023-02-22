import { useNavigate } from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const history = useNavigate();

    function addMeetupHandler(meetupData) {
        fetch(
            'https://react-getting-started-90a60-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-type': 'application/json'
                },
            }
        ).then(() =>{
            history('/');
        })

    }

    return(
        <section>
            <h1>Add new Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    )
}

export default NewMeetupPage;