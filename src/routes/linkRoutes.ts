import { Router } from 'express';
import { shortenUrl, redirectUrl, listLinks, deleteLink } from '../controllers/linkController';

const router = Router();

router.post('/api/links', shortenUrl);
router.get('/api/links', listLinks);
router.delete('/api/links/:id', deleteLink);
router.get('/:code', redirectUrl);

export default router;