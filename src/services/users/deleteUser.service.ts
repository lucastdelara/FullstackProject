import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const deleteUserService = async (idUser: string) => {
  const getUserRepository = AppDataSource.getRepository(User);

  const findUser = await getUserRepository.findOneBy({ id: idUser });

  if (findUser) {
    findUser.isActive = false;
    await getUserRepository.save(findUser);
  }
  console.log(findUser);
  return "Deleted user";
};

export default deleteUserService;
