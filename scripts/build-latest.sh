#!/bin/bash

set -e

echo "🔨 Building @vapi-ai/web library..."
npm run build

echo "📦 Packing library..."
npm pack

echo "🔄 Setting up latest build..."
rm -f vapi-ai-web-latest.tgz
LATEST_TARBALL=$(ls vapi-ai-web-*.tgz | grep -v latest | tail -1)
cp "$LATEST_TARBALL" vapi-ai-web-latest.tgz

echo "✅ Created vapi-ai-web-latest.tgz from $LATEST_TARBALL"
