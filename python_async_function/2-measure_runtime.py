#!/usr/bin/env python3
"""This module contains the measure_time function."""

import time
import asyncio
from typing import List

# Import wait_n from the previous file
wait_n = __import__("1-concurrent_coroutines").wait_n


def measure_time(n: int, max_delay: int) -> float:
    """Measure the total execution time for wait_n and
    return the average time per call."""
    start_time = time.time()
    asyncio.run(wait_n(n, max_delay))
    end_time = time.time()
    total_time = end_time - start_time
    average_time = total_time / n
    return average_time
