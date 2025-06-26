# Step 1: Manually download the Swagger JSON file
curl -o ./api-extended-json.json https://api.vapi.ai/api-extended-json

# Step 2: Find and replace transcript[transcriptType=\"final\"] with transcript[transcriptType='final']
# Use different sed syntax for Linux vs macOS compatibility
if [[ "$OSTYPE" == "darwin"* ]]; then
  # macOS
  sed -i '' 's/transcript\[transcriptType=\\"final\\"\]/transcript[transcriptType='\''final'\'']/g' ./api-extended-json.json
else
  # Linux (GitHub Actions)
  sed -i 's/transcript\[transcriptType=\\"final\\"\]/transcript[transcriptType='\''final'\'']/g' ./api-extended-json.json
fi

# Step 3: Generate TypeScript API using the edited JSON file
npx swagger-typescript-api generate -p ./api-extended-json.json -o . -n api.ts

# Step 4: Remove the edited JSON file
rm ./api-extended-json.json
