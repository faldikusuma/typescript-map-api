import { User } from "./User";
// import { Company } from "./Company";
import { CustoMap } from "./CustomMap";

const user = new User();
const customMap = new CustoMap();

customMap.addUserMarker(user);
