# Step 1: Manually download the Swagger JSON file
curl -o ./api-extended-json.json https://api.vapi.ai/api-extended-json

# Step 2: Find and replace transcript[transcriptType=\"final\"] with transcript[transcriptType='final']
sed -i '' 's/transcript\[transcriptType=\\"final\\"\]/transcript[transcriptType='\''final'\'']/g' ./api-extended-json.json

# Step 3: Generate TypeScript API using the edited JSON file
npx swagger-typescript-api -p ./api-extended-json.json -o . -n api.ts

# Step 4: Remove the edited JSON file
rm ./api-extended-json.json
