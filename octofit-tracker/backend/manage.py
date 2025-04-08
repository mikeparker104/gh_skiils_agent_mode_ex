#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys
import argparse


def main():
    """Run administrative tasks."""
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "octofit_tracker.settings")
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc

    parser = argparse.ArgumentParser(description="Run the development server.")
    parser.add_argument('--port', type=int, default=8000, help='Port number to run the server on')
    args, unknown = parser.parse_known_args()

    if 'runserver' in sys.argv and not any(arg.startswith('0.0.0.0:') for arg in sys.argv):
        sys.argv.append(f'0.0.0.0:{args.port}')

    execute_from_command_line(sys.argv)


if __name__ == "__main__":
    main()
