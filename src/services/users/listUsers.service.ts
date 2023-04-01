import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUser } from "../../interfaces/users";
import { returnListSerializer } from "../../serializers/user.serializers";

const listUsersService = async (): Promise<IUser[] | undefined> => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const returnList = returnListSerializer.validate(users, {
    stripUnknown: true,
  });

  return returnList;
};

export default listUsersService;
