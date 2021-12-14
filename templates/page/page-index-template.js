const template = `/**
 * Module dependencies
 */
import ragnar from 'nordic/ragnar';
import { render } from './controller';

const router = ragnar.router();

/**
 * Routers
 */
router.get('/', render);

/**
 * Expose router
 */
export default router;
`

export default template
