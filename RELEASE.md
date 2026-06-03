# Release Process

This repository uses a two-workflow approach for releases:

1. **Update Dependencies Workflow** - Handles dependency updates, API generation, and version bumping
2. **Release Workflow** - Handles npm publishing from GitHub releases

## Two-Step Release Process

### Step 1: Prepare Release (Manual Trigger)

1. **Run Update Dependencies Workflow**
   - Go to [Actions → Update Dependencies and API](https://github.com/VapiAI/client-sdk-web/actions/workflows/update-deps.yml)
   - Click "Run workflow"
   - Choose options:
     - **Version bump type**: patch, minor, or major
     - **Update dependencies**: Update all dependencies to latest versions
     - **Generate API**: Regenerate API types from Vapi OpenAPI spec
   - Click "Run workflow"

2. **Review and Merge PR**
   - The workflow will create a PR with all updates
   - Review the changes (version bump, dependency updates, API changes)
   - Merge the PR to main

### Step 2: Publish Release (Automated)

3. **Create GitHub Release**
   - Go to the [Releases page](https://github.com/VapiAI/client-sdk-web/releases)
   - Click "Draft a new release"
   - Create a tag with the format `v{VERSION}` matching the version in package.json
   - Set the release title (e.g., "v2.3.7")
   - Add release notes describing the changes
   - Check "Set as a pre-release" if this is a beta/alpha release
   - Click "Publish release"

4. **Automated Publishing**
   The release workflow will automatically:
   - Verify the tag version matches package.json version
   - Install dependencies and build the package
   - Run tests (including example project)
   - Publish to npm with appropriate tags:
     - Production releases: `latest` tag
     - Alpha releases: `alpha` tag (version must contain "alpha")
     - Beta releases: `beta` tag (version must contain "beta")
     - Other pre-releases: `next` tag

## Workflows

### Update Dependencies Workflow (`update-deps.yml`)

- **Trigger**: Manual dispatch from GitHub Actions
- **Purpose**: Prepare releases by updating dependencies, generating API, and bumping versions
- **Creates**: Pull request with all changes ready for review

### Release Workflow (`release.yml`)

- **Trigger**: GitHub release published
- **Purpose**: Verify version and publish to npm
- **Requires**: Package.json version must match release tag

### CI Workflow (`ci.yml`)

- **Trigger**: Push/PR to main
- **Purpose**: Ensure code compiles, tests pass, and example project builds

## Version Naming Conventions

- **Production Release**: `v2.3.7`
- **Beta Release**: `v2.4.0-beta.1`
- **Alpha Release**: `v2.4.0-alpha.1`

## Local Development & Testing

### Testing Changes Locally

```bash
# Build and test example project
npm run test:example

# Create local build for testing
npm run pack:local

# Run example in development mode
npm run dev:example

# Clean up build artifacts
npm run clean-builds
```

### Manual Release (Emergency)

If automation fails, you can publish manually:

```bash
npm ci
npm run build
npm test
npm publish --access public
```

## Troubleshooting

### Common Issues

1. **Version mismatch error**: Ensure the GitHub release tag exactly matches the version in package.json
2. **NPM publish fails**: Check that the `NPM_TOKEN` secret is valid
3. **Example project build fails**: Check that the library builds correctly first
4. **Update workflow fails**: Check the Actions tab for detailed logs

### Rollback Process

If a release has issues:

1. Delete the problematic release from GitHub
2. Use `npm unpublish @vapi-ai/web@{VERSION}` (within 72 hours)
3. Fix the issues
4. Run update workflow with patch version bump
5. Create new release
