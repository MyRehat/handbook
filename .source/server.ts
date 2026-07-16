// @ts-nocheck
import * as __fd_glob_8 from "../content/docs/sync-rhythm.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/security-secrets.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/linear-management.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/index.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/github-actions.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/git-workflow.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/gcp-infrastructure.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/database-maintenance.mdx?collection=docs"
import * as __fd_glob_0 from "../content/docs/async-review.mdx?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {}, {"async-review.mdx": __fd_glob_0, "database-maintenance.mdx": __fd_glob_1, "gcp-infrastructure.mdx": __fd_glob_2, "git-workflow.mdx": __fd_glob_3, "github-actions.mdx": __fd_glob_4, "index.mdx": __fd_glob_5, "linear-management.mdx": __fd_glob_6, "security-secrets.mdx": __fd_glob_7, "sync-rhythm.mdx": __fd_glob_8, });