import express from 'express';
import {
    createUser,
    getUserById,
    addUserAccount,
    getUserAccounts,
    removeUserAccount,
    deleteUser,
    getUserTransactions,
} from '../controllers/userController';
import { isAuthenticated, isUser } from '../middlewares/authMiddleware';
const router = express.Router();

router.get('/:id', getUserById);
router.delete('/:id', [isAuthenticated, isUser], deleteUser);
router.get('/:id/transactions', [isAuthenticated, isUser], getUserTransactions);
router.post('/', createUser);
router.get('/:id/accounts', [isAuthenticated, isUser], getUserAccounts);
router.put('/:id/accounts', [isAuthenticated, isUser], addUserAccount);
router.delete('/:id/accounts', [isAuthenticated, isUser], removeUserAccount);
// router.delete('/users/:id', deleteUser);

export default router;
