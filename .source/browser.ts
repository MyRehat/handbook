// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"async-review.mdx": () => import("../content/docs/async-review.mdx?collection=docs"), "database-maintenance.mdx": () => import("../content/docs/database-maintenance.mdx?collection=docs"), "gcp-infrastructure.mdx": () => import("../content/docs/gcp-infrastructure.mdx?collection=docs"), "git-workflow.mdx": () => import("../content/docs/git-workflow.mdx?collection=docs"), "github-actions.mdx": () => import("../content/docs/github-actions.mdx?collection=docs"), "index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "linear-management.mdx": () => import("../content/docs/linear-management.mdx?collection=docs"), "security-secrets.mdx": () => import("../content/docs/security-secrets.mdx?collection=docs"), "sync-rhythm.mdx": () => import("../content/docs/sync-rhythm.mdx?collection=docs"), }),
};
export default browserCollections;