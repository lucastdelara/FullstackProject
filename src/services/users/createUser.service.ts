import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUser, IUserRequest } from "../../interfaces/users";
import { userWithoutPasswordSerializer } from "../../serializers/user.serializers";

const createUserService = async (
  userData: IUserRequest
): Promise<IUser | undefined> => {
  const userRepository = AppDataSource.getRepository(User);

  const createdUser = userRepository.create(userData);
  await userRepository.save(createdUser);

  const handleSerializer = await userWithoutPasswordSerializer.validate(
    createdUser,
    {
      stripUnknown: true,
    }
  );

  return handleSerializer;
};

export default createUserService;
