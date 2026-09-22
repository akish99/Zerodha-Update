from google import genai

# Initialize the client with your key
client = genai.Client(api_key="AIzaSyDYraLUgd_huZ6xk_bfJUtdQaD1jkwgY_c")

# Generate content
response = client.models.generate_content(
    model="gemini-3.6-flash",
    contents="Say hello!",
)

print(response.text)