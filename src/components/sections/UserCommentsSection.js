import {UserComments} from '../organisms/export';
import {userCommentsSectionIpad} from '../../images/export';

function UserCommentsSection() {
  return (
    <div className='userCommentsSection'>
      <UserComments/>
      <img className='ipadImg' src={userCommentsSectionIpad} />
    </div>
  );
}

export default UserCommentsSection;
