import {UserCommentBox} from '../molecules/export';
import { commentsFace1, commentsFace2, commentsFace3, fiveStars, fourAndHalfStars } from "../../images/export";

function UserComments() {
  return (
    <div className='userComments'>
      <h5>მომხმარებლის კომენტარები</h5>
      <p>გაიგე თუ რა აქვთ სათქმელი ჩვენს ერთგულ მომხმარებლებს. ენდე ჩვენს 
      სერვისებს და მათ კომენტარებს</p>
      <div>
        <UserCommentBox icon={commentsFace1} text="ელია სანდო და პროფესიონალური დასუფთავების კომპანიაა 
        - ყოველთვის სისუფთავის და" size='small' starsImage={fiveStars}/>
        <UserCommentBox icon={commentsFace2} text="ელია სანდო და პროფესიონალური დასუფთავების კომპანიაა 
        - ყოველთვის სისუფთავის და სიმშვიდის შეგრძნებას ტოვებს!" size='medium' starsImage={fourAndHalfStars}/>
        <UserCommentBox icon={commentsFace3} text="ელია სანდო და პროფესიონალური დასუფთავების კომპანიაა 
        - ყოველთვის სისუფთავის და სიმშვიდის შეგრძნებას ტოვებს! სისუფთავის და სიმშვიდის" size='big' starsImage={fiveStars}/>
      </div>
    </div>
  );
}

export default UserComments;
