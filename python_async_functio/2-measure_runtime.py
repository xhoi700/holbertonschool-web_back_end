#!/usr/bin/env python3
"""Measure runtime"""

import time
import asyncio

async_comprehension = __import__("1-async_comprehension").async_comprehension


async def measure_runtime() -> float:
    """Measure the runtime of async_comprehension called
    four times in parallel."""
    start = time.time()
    await asyncio.gather(*(async_comprehension() for _ in range(4)))
    end = time.time()
    return end - start
