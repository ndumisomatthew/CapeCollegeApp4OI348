import { Admin, Resource, Empty, CustomRoutes } from "react-admin";
import {Route, Routes} from 'react-router-dom'
import {PocketBaseProvider} from "./ra-pocketbase";
import { ApplicationsEdit, ApplicationsList, ApplicationsShow } from "./admin_app";
import { StudentList, StudentShow} from "./students";
import {info_modulesList, info_modulesShow, info_modulesEdit} from "./students_information";
import PersonIcon from '@mui/icons-material/Person';  // For Students
import FolderIcon from '@mui/icons-material/Folder';  // For Application
import {ApplicantsShow, ApplicationCreate, ApplicationList} from "./application"
import { Dashboard } from "./dashboard";
import CustomLoginPage from "./CustomLoginPage";
import  ProfileCreate, {UsersList} from "./ProfileCreate";
import WorkIcon from '@mui/icons-material/Work'; // For applications


const pbProvider = PocketBaseProvider("https://studious-computing-machine-v6vqp6vj56rpfx95r-8090.app.github.dev/");

const App = () => (
  <Admin
    dashboard={Dashboard}
    authProvider={pbProvider.authProvider}
    loginPage={CustomLoginPage}
    customRoutes={
      <CustomRoutes>
        <Route path="/create-profile" element={<ProfileCreate />} />
        <Route path="/users" element={<UsersList />} />
      </CustomRoutes>
    }
    dataProvider={pbProvider.dataProvider}
  >
    <Resource 
      name="application" 
      create={ApplicationCreate} 
      list={ApplicationList} 
      show={ApplicantsShow} 
      icon={WorkIcon} // Assigning icon to applications
    />
</Admin>
);

export default App;

