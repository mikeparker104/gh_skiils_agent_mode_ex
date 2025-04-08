"""
ASGI config for octofit_tracker project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.2/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "octofit_tracker.settings")

application = ProtocolTypeRouter({
    # (http->django views is added by default)
    "http": get_asgi_application(),
    # Add other protocols like WebSocket here
})
