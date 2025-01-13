"use client"

import { useEffect, useRef } from 'react'

export function NeuralNetworkBackground() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current) return

    const svg = svgRef.current
    const width = window.innerWidth
    const height = window.innerHeight

    svg.setAttribute('width', width.toString())
    svg.setAttribute('height', height.toString())

    // Create nodes
    const nodes = Array.from({ length: 50 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
    }))

    // Create connections
    const connections = []
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() > 0.95) {
          connections.push({ source: nodes[i], target: nodes[j] })
        }
      }
    }

    // Create SVG elements
    connections.forEach((connection) => {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
      line.setAttribute('x1', connection.source.x.toString())
      line.setAttribute('y1', connection.source.y.toString())
      line.setAttribute('x2', connection.target.x.toString())
      line.setAttribute('y2', connection.target.y.toString())
      line.setAttribute('stroke', 'rgba(147, 51, 234, 0.2)')
      line.setAttribute('stroke-width', '1')
      svg.appendChild(line)
    })

    nodes.forEach((node) => {
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
      circle.setAttribute('cx', node.x.toString())
      circle.setAttribute('cy', node.y.toString())
      circle.setAttribute('r', '2')
      circle.setAttribute('fill', 'rgba(147, 51, 234, 0.6)')
      svg.appendChild(circle)
    })

    const handleResize = () => {
      svg.innerHTML = ''
      svg.setAttribute('width', window.innerWidth.toString())
      svg.setAttribute('height', window.innerHeight.toString())
      // Recreate the network on resize
      // (You may want to debounce this function for better performance)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <svg
      ref={svgRef}
      className="absolute inset-0 w-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    />
  )
}

