# LLM Fine-tuned Workout Plan Enhancer

This directory contains a Llama-based fine-tuned model for enhancing workout plans using RAG (Retrieval-Augmented Generation).

## Setup

1. Install dependencies:
```bash
pip install -r requirement.txt
```

2. Create a `.env` file with your Hugging Face API key:
```bash
cp .env.example .env
```

3. Edit `.env` and add your Hugging Face API key:
```
HF_API_KEY=your_actual_api_key_here
```

## Usage

Run the workout plan enhancer:
```bash
python Llamafinetuned.py
```

## Security Note

**Never commit your `.env` file or hardcode API keys in the code.** The `.env` file is gitignored for security.
