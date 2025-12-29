import { useAuth } from '../../homepage/auth';
import { MenuButton, Room, Setter} from './leftsidebar';

export function DefaultBar({setSidebar, directMessages, groupChats} : {setSidebar: Setter, directMessages:Room[],  groupChats:Room[]}) {
  const { setRoom } = useAuth();

  const directRooms = directMessages.map(room => (
      <div key={room._id}>
        <MenuButton className={room._id} set={setRoom} name={room.name} />
      </div>
    ))

  const groupRooms = groupChats.map(room => (
      <div key={room._id}>
        <MenuButton className={room._id} set={setRoom} name={room.name} />
      </div>
    ))
	
	return(
    <div className="sidebar">
      <Menu setSidebar={setSidebar}></Menu>
			<div className="">
				<div className="text">
					Direct Messages
					<div className="tabs">{directRooms}</div>
				</div>
				<div className="text">
					Group Chats
					<div className="tabs">{groupRooms}</div>
				</div>
				
			</div>
      <Options setSidebar={setSidebar}></Options>
    </div>
  );
}

// made this annoyingly tidy
// copy settings not this mechanical mess

function Options({setSidebar} : {setSidebar: Setter}){
	return(
		<div className="bottom">
			<ActualMenuButton name={"Profile"} set={()=>setSidebar("options")}></ActualMenuButton>
			<ActualMenuButton name={"Settings"} set={()=>setSidebar("settings")}></ActualMenuButton>
		</div>
	);  
}

function Menu({setSidebar} : {setSidebar: Setter}){
	return(
		<div className="top">
			<MenuInput></MenuInput>  
			<ActualMenuButton name={"Friends"} set={()=>setSidebar("friends")}></ActualMenuButton>
			<ActualMenuButton name={"Requests"} set={()=>setSidebar("requests")}></ActualMenuButton>
		</div>
	);
}

function MenuInput(){
	return(
		<input className="input menu-input" placeholder="Search..."></input>
	);
}

function ActualMenuButton({name, set} : {name : string, set: Setter}){
	return(
		<button 
			className="button menu-button"
			onClick={() => set(name)}
		>{name}</button> 
	);
}
